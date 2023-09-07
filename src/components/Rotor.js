function Rotor(props) {
    let rotorObject = {
        name: {props.name},
        rotor: {props.rotor},
        index: 0,
        rotation: function(){
                this.index++
            }
        }

        if(rotorObject.index == 25){
            rotorObject.index = 0;
            return 26
        } else {
            rotorObject.rotation();
            return rotorObject.index
        }
}
 



export default Rotor;
