const FileUpload = () => {
  return (
    <form
      action="http://localhost:3000/api/upload"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="file" name="images" multiple required accept="image/*" />
      <button type="submit">Upload</button>
    </form>
  );
};

export { FileUpload };
