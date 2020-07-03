import React, { Component } from 'react';

export default class MapPicker extends Component{

    
    constructor(props){
        super(props);

        this.changeaddsub = this.changeaddsub.bind(this);
        this.changechildcare = this.changechildcare.bind(this);
        this.changeDentRes = this.changeDentRes.bind(this);
        this.changedisabled = this.changedisabled.bind(this);
        this.changedomviolence = this.changedomviolence.bind(this);
        this.changeemploytraining = this.changeemploytraining.bind(this);
        this.changeparenting = this.changeparenting.bind(this);
        this.changefood = this.changefood.bind(this);
        this.changehousing = this.changehousing.bind(this);
        this.changeimmigrant = this.changeimmigrant.bind(this);
        this.changelegal = this.changelegal.bind(this);
        this.changeesl = this.changeesl.bind(this);
        this.changeMedRes = this.changeMedRes.bind(this);
        this.changemental = this.changemental.bind(this);
        this.changesafety = this.changesafety.bind(this);
        this.changesenior = this.changesenior.bind(this);
        this.changesexual = this.changesexual.bind(this);
        this.changetransport = this.changetransport.bind(this);
        this.changetutoring = this.changetutoring.bind(this);
        this.changevision = this.changevision.bind(this);
        this.changeweight = this.changeweight.bind(this);
        this.changeafterschool = this.changeafterschool.bind(this);
        this.myFunction = this.myFunction.bind(this);

        this.displayMap = this.displayMap.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);

        this.state = {
             addsub:  "https://www.google.com/maps/d/u/0/embed?mid=1G_uPTo-Ya5kaEwya-prBZLIbo7ltNtNF&ll=34.087909540955145%2C-118.40893199864513&z=10",
             childcare: "https://www.google.com/maps/d/u/0/embed?mid=1GtubrU9_yGv-3a5LQtEFZ3UeVE6rzgT_",
             dentres: "https://www.google.com/maps/d/u/0/embed?mid=1UdfdAo0FQ28oKKIHG-1FVJL_m-J9nvKC",
             disabled: "https://www.google.com/maps/d/u/0/embed?mid=10LqJoU_il2dOq79JKpVR8KwD0f9Haifp",
             domviolence: "https://www.google.com/maps/d/u/0/embed?mid=15vgTZuhrnOodUoD1noSNtbzcidBB-Fg4",
             employtraining: "https://www.google.com/maps/d/u/0/embed?mid=124uKlVeXLTc7M8k_caco26Ekknuz0Q4C",
             parenting: "https://www.google.com/maps/d/u/0/embed?mid=1qHW-LTcRL-aG9YG6BGtYeZZSH3-xU6Z7",
             food: "https://www.google.com/maps/d/u/0/embed?mid=18O0QlGDQaxb8OqJQWdiBQDhhGuAdklpy",
             housing: "https://www.google.com/maps/d/u/0/embed?mid=1dxCg8yO_pPpcgAvLU_gcOwAmIX4HmTP1",
             immigrant: "https://www.google.com/maps/d/u/0/embed?mid=1KlXVXoEIcdAvHqquzygxLC1Mz3z56MNY",
             legal: "https://www.google.com/maps/d/u/0/embed?mid=1VDkGCFGqcQCgpXO-gN2YAXbA1D61KHab",
             esl: "https://www.google.com/maps/d/u/0/embed?mid=1Czivk89ryTI0yvExdABeQrA6UAeFaCyf",
             medres: "https://www.google.com/maps/d/u/1/embed?mid=1kHivG6yTMpub0JwpB-rHeuuF2tKvzL-Z",
             mental: "https://www.google.com/maps/d/u/0/embed?mid=1Bp1VI60E3yPU2fJlPFGvmZsQhqR8ywHr",
             safety: "https://www.google.com/maps/d/u/0/embed?mid=1YWHg2NIBVuVuJsCXrCFDdq6MmpXJMmCK",
             senior: "https://www.google.com/maps/d/embed?mid=1hWpyvDJjG3_v91FwGBMamkiQXcCm6iEQ",
             sexual: "https://www.google.com/maps/d/u/0/embed?mid=16cEgNF9b41dP1yi4uLRGIPhA-X_IG3Dy",
             transport: "https://www.google.com/maps/d/u/0/embed?mid=110t8vWhnRYO-l6ZqERtev-mnOQLLqGQC",
             tutoring: "https://www.google.com/maps/d/u/0/embed?mid=1JbcpiPntUEbZ8_99nZ4OMJOgGUtXeea8",
             vision: "https://www.google.com/maps/d/u/0/embed?mid=1UvxImiEHNAqyGxGUeyUYxjB3gaR8bdhO",
             weight: "https://www.google.com/maps/d/u/0/embed?mid=1awvL1mGJF_56lzEui1Dbvdi2Sc6qSmMi",
             afterschool: "https://www.google.com/maps/d/u/0/embed?mid=1WnnzfaWjVe4b5sPRcpwquFw8QylouJNl",

            maps_list: ['http://www.uclascope.org/'],
            count: 0,
        };
    }

    incrementCount(){
        if(this.state.count >= this.state.maps_list.length-1){
        }
        else{
            this.setState({
                count: this.state.count + 1
            });
        }
    }
    decrementCount(){
        if(this.state.count == 0){
        }
        else{
            this.setState({
                count: this.state.count - 1
            });
        }
    }


    changeaddsub(){
        let x = this.state.addsub;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changechildcare(){
        let x = this.state.childcare;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeDentRes(){
        let x = this.state.dentres;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changedisabled(){
        let x = this.state.disabled;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changedomviolence(){
        let x = this.state.domviolence;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeemploytraining(){
        let x = this.state.employtraining;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeparenting(){
        let x = this.state.parenting;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changefood(){
        let x = this.state.food;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changehousing(){
        let x = this.state.food;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeimmigrant(){
        let x = this.state.food;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changelegal(){
        let x = this.state.legal;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeesl(){
        let x = this.state.esl;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeMedRes(){
        let x = this.state.medres;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changemental(){
        let x = this.state.mental;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changesafety(){
        let x = this.state.safety;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changesenior(){
        let x = this.state.senior;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changesexual(){
        let x = this.state.sexual;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changetransport(){
        let x = this.state.transport;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changetutoring(){
        let x = this.state.tutoring;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changevision(){
        let x = this.state.vision;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeweight(){
        let x = this.state.weight;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }

    changeafterschool(){
        let x = this.state.afterschool;
        let i = this.state.maps_list.indexOf(x)
        if(i < 0){
            this.state.maps_list.push(x);
        }
        else{
            this.setState({maps_list: this.state.maps_list.filter(el => el != x)})
        }
    }


    displayMap(){
       if (this.state.maps_list == null) return null;

        let displaymap;

        if(this.state.count > this.state.maps_list.length - 1){return <iframe src='http://www.w3.org/2000/svg' width="100%" height="600px"></iframe>}
        
        this.state.maps_list.map( (resmap, index) => {
            if(index==this.state.count){
              displaymap = <iframe src={resmap} width="100%" height="600px"></iframe>;
            } 
        })

        return displaymap;
    }

    myFunction() {
        /* Get the text field */
        var copyText = document.getElementById("myInput");
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
      }

    render(){
        return(
            <div className="App">
                <div>
                    <div className="Checkboxes">
                    <h2 className="checkboxtitle">Select Resources</h2>
                        <table>
                            <tr>
                        
                        <td className="td">
                        <input name="addsub" type="checkbox" onClick={this.changeaddsub}/>
                        <label for="addsub">Addiction Resources</label></td>                       
                     
                        <td className="td">
                        <input name="childcare" type="checkbox" onChange={this.changechildcare}/>
                        <label for="childcare">Childcare Resources</label></td>
                        </tr>
                            <tr>
                        <td className="td">
                        <input name="dentres" type="checkbox" onChange={this.changeDentRes}/>
                        <label for="dentres">Dental Resources</label></td>
                            
                        <td className="td">
                        <input name="disabled" type="checkbox" onChange={this.changedisabled}/>
                        <label for="disabled">Disabled Services</label></td>
                        </tr>
                            <tr>
                        <td className="td">
                        <input name="domvio" type="checkbox" onChange={this.changedomviolence}/>
                        <label for="domvio">Domestic Violence</label></td>
                               
                        <td className="td">
                        <input name="emptr" type="checkbox" onChange={this.changeemploytraining}/>
                        <label for="emptr">Employment/Job Training</label></td>
                        </tr>
                            <tr>
                        <td className="td">
                        <input name="pare" type="checkbox" onChange={this.changeparenting}/>
                        <label for="pare">Parenting Resources</label></td>
                                
                        <td className="td">
                        <input name="food" type="checkbox" onChange={this.changefood}/>
                        <label for="food">Food Assistance</label></td>
                        </tr>
                            <tr>
                        <td className="td">
                        <input name="house" type="checkbox" onChange={this.changehousing}/>
                        <label for="house">Housing Assistance</label></td>
                     
                        <td className="td">
                        <input name="imm" type="checkbox" onChange={this.changeimmigrant}/>
                        <label for="imm">Immigrant/Undocumented Services</label></td>
                        </tr>
                            <tr>
                        <td className="td">
                        <input name="leg" type="checkbox" onChange={this.changelegal}/>
                        <label for="leg">Legal Resources</label></td>
                                
                        <td className="td">
                        <input name="esl" type="checkbox" onChange={this.changeesl}/>
                        <label for="esl">Literary/ESL Resources</label></td>
                            </tr>
                            <tr>
                        <td className="td">
                        <input name="medres" type="checkbox" onChange={this.changeMedRes}/>
                        <label for="medres">Medical Services</label></td>
                               
                        <td  className="td">
                        <input name="mental" type="checkbox" onChange={this.changemental}/>
                        <label for="mental">Mental Health/Counseling</label></td>
                        </tr>
                            <tr> 
                        <td className="td">
                        <input name="safe" type="checkbox" onChange={this.changesafety}/>
                        <label for="safe">Safety in the House</label></td>
                        
                        <td className="td">
                        <input name="sen" type="checkbox" onChange={this.changesenior}/>
                        <label for="sen">Senior Services</label></td>
                        </tr>
                            <tr>
                        <td className="td">
                        <input name="sex" type="checkbox" onChange={this.changesexual}/>
                        <label for="sex">Sexual Assault Services</label></td>

                        <td className="td">
                        <input name="trans" type="checkbox" onChange={this.changetransport}/>
                        <label for="trans">Transportation Services</label></td>
                        </tr>
                            <tr>
                        <td className="td">
                        <input name="tut" type="checkbox" onChange={this.changetutoring}/>
                        <label for="tut">Tutoring Services</label></td>
                                
                        <td className="td">
                        <input name="vis" type="checkbox" onChange={this.changevision}/>
                        <label for="vis">Vision Services</label></td>
                        </tr>
                            <tr>
                        <td  className="td">
                        <input name="we" type="checkbox" onChange={this.changeweight}/>
                        <label for="we">Nutrition Resources</label></td>
                        
                        <td className="td">
                        <input name="aft" type="checkbox" onChange={this.changeafterschool}/>
                        <label for="aft">After-School Activities</label></td>
                                <td className="td"></td>
                            </tr>
                        </table>
                    </div>
                    <div className="mapbox">
                        <h2 className="maptitle">Chosen Maps</h2>
                        <button className="buttonleft" onClick={this.decrementCount}> Previous </button>
                        <button className="buttonright" onClick={this.incrementCount}> Next </button>
                        <div className="maprender">
                            {this.displayMap()}
                        </div>
                     </div>
                     </div>
            </div>
        );
    }
}

