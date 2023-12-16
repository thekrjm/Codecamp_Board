import axios from "axios";
import { useEffect, useState } from "react";
export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const data = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDog(data.data.message);
    };
    onClickSync();
  }, []);

  return (
    <div>
      <img src={dog} />
    </div>
  );
}
