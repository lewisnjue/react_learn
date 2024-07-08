function Btn(){
    const clickhandler = ()=>{
        console.log('button has been clicked');
    }
    return (
        <>
        <button  onClick={clickhandler}>click me</button>
        <button onMouseOver={()=>{
            console.log('mouse over');
        }}>mouse over</button>
        </>
        
    );
// on react we dont call the evetn handler we just pass the reference to it 
// Hooks are funtions that were intoroduced in react, they let 
// you hook into react state and lifecycle features from components 

}
export default Btn;
