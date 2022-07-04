/*ReactDOM.render(<h1>My first react</h1>, document.getElementById("root"))
// reactdom allows you to render sth using html elements: what am i rendering? a h1 tag and where? on the root id in the div.
ReactDOM.render(<p>I am excited to learn react</p>, document.getElementById("root2"))
ReactDOM.render(<h2>I am a web dev</h2>, document.getElementById("root2"))
ReactDOM.render(
    <ul >
        <li>HTML</li>
        <li>CSS</li>
        <li>Js</li>
    </ul>,
    document.getElementById("root"))

    function mainCont(){
        return(
         <h1>I am learning react</h1>   
        )
    }
    ReactDOM.render(<div><mainCont/></div>, document.getElementById("root3"))

    const h1 = document.createElement("h1")
    h1.textContent = "I am learning react"
    h1.className="header"
    document.getElementById("root3").append(h1)


   // ReactDOM.render(
        // react can only render one parent element at a time, which can contain many children
    //    <div>
     //       <h1>Ryan</h1>
       //     <p>Wanjie</p>
     //   </div>,
      //  document.getElementById("root4"))

      // put your content in a constant called page then render out page
      */
     /*
      const page=(
        <div>
          <h1>Ryan</h1>
          <p>Wanjie</p>
        </div>

      )
      console.log(page)

      ReactDOM.render(page, document.getElementById("root4"))

      let navbar=(
        <nav>
            <h1>This is an example of how good i am at react</h1>
            <ul>
                <li>JJ</li>
                <li>Ji</li>
                <li>Jo</li>
            </ul>
        </nav>
      )

      ReactDOM.render(navbar, document.getElementById('root'));

      let nav=(
        <nav> 
            <h1>This is an example of how good i am at react</h1>
            <ul>
                <li>Job</li>
                <li>Jim</li>
                <li>Jol</li>
            </ul>
        </nav>
      )
      ReactDOM.render(nav, document.getElementById("root2"))
     */

      /*let page=(
        <div>
            <img src="icons/logo.png" width="100px" />
            <h2>Fun facts about Ryan</h2>
            <ol>
                <li>I am a guy</li>
                <li>I play football</li>
                <li>I love coding...yeah i do</li>

            </ol>

        </div>
      )
      ReactDOM.render(page, document.getElementById('root')); 
       

      function Page() {
        return(
            <div>
            <img src="icons/logo.png" width="100px" />
            <h2>Fun facts about Ryan</h2>
            <ol>
                <li>I am a guy</li>
                <li>I play football</li>
                <li>I love coding...yeah i do</li>

            </ol>

        </div> 
        )
      }
      ReactDOM.render(<Page/>, document.getElementById("root2"))
*/ 
    
      // fun is a function that returns react element
    function Fun(){
        return(
            <div>
                <Header/>
                <Body/>
                <Footer/>
               

            </div>
        )
    }
    ReactDOM.render(<Fun/>, document.getElementById('root3'))

    function Header() {
        return(
            <header>
                    <nav className="main-nav">
                     <img src="icons/logo.png" className="icon" />
                     <ul className="nav">
                        <li>Price</li>
                        <li>About</li>
                        <li>Contact</li>
                     </ul>
                    </nav>
                </header>
    
        )
       }

       function Body(){
        return(
            <div className="main">
               <h1>React is very cool</h1>
                <ul>
                    <li>React is fun</li>
                    <li>React is awesome</li>   
                </ul>
                </div>
        )

       }
       function Footer(){
        return(
            
            <footer className="footer">
            <small>All rights reserved</small>
          </footer>
        

        )

       }


