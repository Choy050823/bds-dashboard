const PopUp = () => {
  return (
    <div class="popup_box">
      <i class="fas fa-exclamation"></i>
      <h1>Bully Detected!</h1>
      <label>Please press the button: "Play Video" to continue scanning</label>
      <div class="btns">
        <a class="btn1">Cancel</a>
        <a class="btn2">Ok</a>
      </div>
    </div>
  );
};

export default PopUp;