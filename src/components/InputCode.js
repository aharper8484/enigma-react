import { useState } from "react";

function InputCode() {
  const [encryption, setEncryption] = useState("");

  return (
    <div>
      <form>
        <label for="encryption">Code for Encryption:</label>
        <input
          type="text"
          id="encryption"
          name="encryption"
          value={encryption}
          onChange={(e) => setEncryption(e.target.value)}
        />
      </form>
    </div>
  );
}
export default InputCode;
