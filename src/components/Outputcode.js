function OutputCode({ result }) {
  return (
    <div>
      <form>
        <label for="decrypted">Decrypted Code</label>
        <textarea type="text" id="decrypted" name="decrypted" value={result} />
      </form>
    </div>
  );
}
export default OutputCode;
