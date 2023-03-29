import logoimg from "../logo.png";

const style = {
    logo :{
        margin:'30px',
        width:'7.5%',
        float:'left'

    }
};

export default function Logo(){

    return<div>
        <img src={logoimg} alt='' style={style.logo}/>
    </div>
}