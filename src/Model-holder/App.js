import React from 'react'
import useStyles from "./ModalStyles";
import SimpleModal from "./SimpleModal";
function App() {
    const classes = useStyles();
    return (

       
  <div className={classes.appWrapper}>
    <header>
      <h1>React Simple Modal</h1>
     
      <p>
        This is an example on how to build a simple modal window with{" "}
        <b>React</b> and <b>JSS.</b>
      </p>

      <SimpleModal buttonLabel="Open text modal">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
          quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
          turpis a quam posuere lobortis.
        </p>
        <p>
          Aenean risus nunc, pretium eu massa tincidunt, dignissim tincidunt
          arcu. Integer et mauris vestibulum, pharetra eros nec, feugiat orci.
        </p>
      </SimpleModal>


      <p>
        To close modal, click on [X] button, ESC key, or simply outside the
        window.
      </p>

      <p>
        Here you can follow the step by step tutorial to build this component:
        <br />
        <a
          href="https://medium.com/@pppped/build-a-simple-responsive-modal-with-react-and-jss-updated-with-hooks-8cf821b1e205"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://medium.com/@pppped/build-a-simple-responsive-modal-with-react-and-jss-updated-with-hooks-8cf821b1e205
        </a>
      </p>
    </header>
        </div>
    )
}

export default App
