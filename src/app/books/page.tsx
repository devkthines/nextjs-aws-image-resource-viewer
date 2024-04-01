'use client'
import { useEffect, useState } from "react";
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
// import "./App.css";
import SimplePaperImages from "../../components/imgOnPaper"; // Import the component
function App() {
  const [objects, setObjects] = useState<
    Required<ListObjectsCommandOutput>["Contents"]
  >([]);

  useEffect(() => {
    const client = new S3Client({
      region: "placeholder - has to be hidden(can send to you for testing)",
      credentials: fromCognitoIdentityPool({
        clientConfig: { region: "placeholder - has to be hidden(can send to you for testing)" },
        identityPoolId: "placeholder - has to be hidden(can send to you for testing)",
      }),
    });
    const command = new ListObjectsCommand({ Bucket: "placeholder - has to be hidden(can send to you for testing)" });
    client.send(command).then(({ Contents }) => setObjects(Contents || []));
  }, []);

  return (
    <div className="flex justify-center">
      {objects.map((o) => (
        <SimplePaperImages key={o.ETag} src={`placeholder - has to be hidden(can send to you for testing)/${o.Key}`} />

      ))}
    </div>
  );
}

export default App;
