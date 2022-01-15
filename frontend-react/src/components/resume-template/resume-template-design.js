import React,{useState} from 'react'
import ResumeB from './resume-template-2/index.js'
import ResumeA from './resume-template-1/index.js'
import ResumeC from './resume-template-3/index.js'
import ResumeD from './resume-template-4/index.js'
import ResumeFormatting from './resume-template-formatting.js'
import { jsPDF } from "jspdf";
import '../../assets/css/resume-template/resume-template-design.css'



const ResumeTemplate1 = (props) => {

const templateResumeID = localStorage.getItem("templateResumeID")


// font size
const [fontsizes,setFontsize] = useState(1.4)

const handleChange = (value) => {
  setFontsize(value)
}


// font family
const [fontfamily,setFontfamily] = useState('raleway')

const handleSelectFontFamilyChange = (selectedOption,e) => {
setFontfamily(selectedOption.value)
}

  const Resume = () => {

       switch(templateResumeID) {

         case "TRI1":   return <ResumeA fontsize={fontsizes} fontfamily={fontfamily}/>;
         case "TRI2":   return <ResumeB />;
         case "TRI3": return <ResumeC />;
         case "TRI4":  return <ResumeD />;

         default:      return <h1>No project match</h1>
       }
     }

  const DownloadPDF = (e) => {
    e.preventDefault()

     let doc = new jsPDF("portrait", 'pt', 'a4');


     var img = new Image;

       if(templateResumeID === "TRI1")
       {
         doc.html(document.getElementById('TRI1'),
          {  html2canvas: {
                    scale: 1,
                },

           callback: () => {
             // var textX = 25, textY = 25;
   // doc.textWithLink('test', textX, textY, {url: 'https://www.google.com/'});
           doc.save('resume.pdf');
           }
         });
          }

          else if(templateResumeID === "TRI2")
          {
           doc.html(document.getElementById('TRI2'), {
           callback: () => {
             doc.save('resume.pdf');
           }
         });
          }
          else if(templateResumeID === "TRI3")
          {
           doc.html(document.getElementById('TRI2'), {
           callback: () => {
             doc.save('resume.pdf');
           }
         });
          }
          else {
            doc.html(document.getElementById('TRI4'), {
            callback: () => {
              doc.save('resume.pdf');
            }
          });
          }

  }

  return (
    <div className="resume__page">
    <div className="resume__leftside">
    <div className="resume__thumbail">
     {Resume()}
     </div>
     <button className="resumedownloadbutton" onClick={DownloadPDF}>Download</button>
     </div>
     <div className="resume__rightside">
       <div>
      <ResumeFormatting fontfamily={fontfamily} handleSelectFontFamilyChange={handleSelectFontFamilyChange} handleChange={handleChange} fontsizes={fontsizes}/>
      </div>
     </div>
     </div>
  )
}

export default ResumeTemplate1
