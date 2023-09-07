import { useState } from "react";

function InputCode({ encryptionText, onChange }) {
  return (
    <div>
      <form>
        <label for="encryption">Code for Encryption:</label>
        <textarea
          type="text"
          id="encryption"
          name="encryption"
          value={encryptionText}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
export default InputCode;
