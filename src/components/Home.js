import Form from "./Form/Form";
var width = 0;

function progressBar(){
    const element =  document.getElementById('top-progress');
    if(width < 100){
        width = width + 20;
        element.style.width = `${width}%`;
    }
}


const Home = () => {

  return (
    <div className="home" style={{"height":"100vh"}}>
      <div id="top-progress" style={{ "height": "6px","width": "0","background-color": "rgb(0, 119, 255)"}}></div>
      <Form progressBar={progressBar} />
    </div>
  );
};

export default Home;
