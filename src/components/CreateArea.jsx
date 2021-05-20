import React, {useState} from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setInputText(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(inputText);
        setInputText({ 
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
    }
    
    return (
        <div>
            <form className="create-note">
                {isExpanded ?  <input onChange={handleChange} name="title" value={inputText.title} placeholder="Title"></input> : null}
                <textarea onClick={expand} onChange={handleChange} name="content" value={inputText.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1}></textarea>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}



export default CreateArea;