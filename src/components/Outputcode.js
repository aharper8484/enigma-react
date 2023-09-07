function OutputCode({ result }) {
  return (
    <div>
      <form>
        <label for="decrypted">Result</label>
        <textarea type="text" id="decrypted" name="decrypted" value={result} />
      </form>
    </div>
  );
}
export default OutputCode;
