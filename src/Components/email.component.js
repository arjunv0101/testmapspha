import React, { Component } from 'react';
import ReactGA from 'react-ga';



export default class EmailComponent extends Component{

    constructor(props){

        super(props);

        this.changeprefix = this.changeprefix.bind(this);
        this.changepatientname = this.changepatientname.bind(this);
        this.changephaname = this.changephaname.bind(this);
        this.changedate = this.changedate.bind(this);
        this.changeintroline = this.changeintroline.bind(this);
        this.changephaemail = this.changephaemail.bind(this);

        this.changeresaddress = this.changeresaddress.bind(this);
        this.changeresdescription = this.changeresdescription.bind(this);
        this.changeresemail = this.changeresemail.bind(this);
        this.changereshours = this.changereshours.bind(this);
        this.changeresname = this.changeresname.bind(this);
        this.changeresphone = this.changeresphone.bind(this);
        this.changereswebsite = this.changereswebsite.bind(this);

        this.createNewContent = this.createNewContent.bind(this);
        this.myFunction = this.myFunction.bind(this);

        this.generateFinalEmail = this.generateFinalEmail.bind(this);


        this.state ={
            content: [],
            prefix: "",
            patient_name: "",
            PHA_name: "",
            date: "",
            introline: "",
            PHA_email: "",


            res_name: "",
            res_address: "",
            res_website: "",
            res_email: "",
            res_phone: "",
            res_hours: "",
            res_description: "",

            finalcontent: "",

        }
    }

    emailHandler(){
        ReactGA.event({
            category: "Submission",
            action: 'Email Submitted'
        })
    }

    resourceHandler(){
        ReactGA.event({
            category: "Submission",
            action: 'Resource Submitted'
        })
    }

    changeprefix(e){
        this.setState({
            prefix: e.target.value
        })
    }

    changepatientname(e){
        this.setState({
            patient_name: e.target.value
        })
    }

    changephaname(e){
        this.setState({
            PHA_name: e.target.value
        })
    }

    changephaemail(e){
        this.setState({
            PHA_email: e.target.value
        })
    }

    changedate(e){
        this.setState({
            date: e.target.value
        })
    }

    changeintroline(e){
        this.setState({
            introline: e.target.value
        })
    }

    changeresname(e){
        this.setState({
            res_name: e.target.value
        })
    }

    changeresaddress(e){
        this.setState({
            res_address: e.target.value
        })
    }

    changereswebsite(e){
        this.setState({
            res_website: e.target.value
        })
    }

    changeresemail(e){
        this.setState({
            res_email: e.target.value
        })
    }

    changeresphone(e){
        this.setState({
            res_phone: e.target.value
        })
    }

    changereshours(e){
        this.setState({
            res_hours: e.target.value
        })
    }

    changeresdescription(e){
        this.setState({
            res_description: e.target.value
        })
    }

    createNewContent(){
        const res = {
            name: this.state.res_name,
            address: this.state.res_address,
            website: this.state.res_website,
            email: this.state.res_email,
            phone: this.state.res_phone,
            hours: this.state.res_hours,
            description: this.state.res_description
        }

        this.state.content.push(res);

        this.setState({
            res_name: "",
            res_address: "",
            res_website: "",
            res_email: "",
            res_phone: "",
            res_hours: "",
            res_description: "",
        });

        this.resourceHandler();

        console.log(res);

    }


    generateFinalEmail(){
        let open = "Dear " + this.state.prefix + this.state.patient_name + ", ";

        let intro = "I hope your week is going well. My name is " + this.state.PHA_name + ", and I am the UCLA SCOPE Volunteer that you spoke to at the UCLA clinic on " + this.state.date + ".";
        intro = intro + " " + this.state.introline;

        let resources = "";

        resources = this.state.content.map((res) => 

            "Name: " + res.name + "\n" + 
            "Address: " + res.address + "\n" + 
            "Website: " + res.website + "\n" + 
            "Email: " + res.email + "\n" + 
            "Phone: " + res.phone + "\n" + 
            "Hours: " + res.hours + "\n" + 
            "Description: " + res.description + "\n" + "\n"

        );


        let end = "Once you have accessed these resources, I would greatly appreciate if you complete the following short survey where you can give feedback about your experience: bit.ly/phafus";

        end = end + " In two/three weeks I will be emailing you again to ask for your satisfaction with the resources provided. Please feel free to email me at " + this.state.PHA_email + " if you have any questions or need additional resources."

        this.emailHandler();

        this.setState({
            finalcontent: open + "\n" + "\n" + intro + "\n" + "Resources: " + "\n" + resources + "\n" + end
        });
    }
    
    myFunction() {
        /* Get the text field */
        var copyText = document.getElementById("myInput2");
      
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
            <div>
                <div className="textbox">
                        <textarea id="myInput2" rows="17" cols="65" value={this.state.finalcontent}></textarea>
                </div>
                <div>
                    <button onClick={this.myFunction}>Copy Email</button>
                </div>


                <br></br>


                <div>
                    <div className="patient">
                        <h2 className="patienttitle">      Email Template</h2>

                        
                        <input name="prefix" type="text" onChange={this.changeprefix}/>
                        <label for="prefix">      Prefix</label>
                        <br></br>
                        <br></br>
                        
                        
                        <input name="name" type="text" onChange={this.changepatientname}/>
                        <label for="name">      Patient Last Name</label>
                        <br></br>
                        <br></br>
                        
                        
                        <input name="phaname" type="text" onChange={this.changephaname}/>
                        <label for="phaname">      PHA Name</label>
                        <br></br>
                        <br></br>

                        
                        <input name="phaemail" type="text" onChange={this.changephaemail}/>
                        <label for="phaemail">      PHA Email</label>
                        <br></br>
                        <br></br>

                        
                        <input name="date" type="text" onChange={this.changedate}/>
                        <label for="date">      Date</label>
                        <br></br>
                        <br></br>

                        <textarea name="intro" type="text" rows="10" cols="40" onChange={this.changeintroline}/>
                        <label for="intro">      Introduce Resources</label>
                        <br></br><br></br>

                        <button onClick={this.generateFinalEmail}>Submit Email</button>

                    </div>
                    <div className="resource">
                        <h2 className="resourcetitle">Resource Specific</h2>

                        <input name="resname" type="text" onChange={this.changeresname}/>
                        <label for="resname">      Resource Name</label>
                        <br></br><br></br>

                        <textarea name="resadd" type="text" rows="5" cols ="40" onChange={this.changeresaddress}/>
                        <label for="resadd">      Resource Address</label>
                        <br></br><br></br>

                        <input name="resweb" type="text" onChange={this.changereswebsite}/>
                        <label for="resweb">      Resource Website</label>
                        <br></br><br></br>

                        <input name="resphone" type="text" onChange={this.changeresphone}/>
                        <label for="resphone">      Resource Phone</label>
                        <br></br><br></br>

                        <input name="resem" type="text" onChange={this.changeresemail}/>
                        <label for="resem">      Resource Email</label>
                        <br></br><br></br>

                        <input name="reshours" type="text" onChange={this.changereshours}/>
                        <label for="reshours">      Resource Hours</label>
                        <br></br><br></br>

                        <textarea name="resdesc" type="text" rows="7" cols="40" onChange={this.changeresdescription}/>
                        <label for="resdesc">      Resource Description</label>
                        <br></br><br></br>

                        <button onClick={this.createNewContent}>Submit Res</button>

                    </div>
                </div>
            </div>
        )
    }

}


