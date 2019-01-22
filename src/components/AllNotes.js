import React, { Component, Fragment } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardText,
    CardBody,
    CardTitle,
    CardFooter,
    Button
} from 'reactstrap';
import "./AllNotes.css";

class AllNotes extends Component {
    handleRenderNotes = () => {
        if (this.props.notes){
            return (
                <Row>
                    <Col sm="6">
                    <Card>
                        <CardHeader>Header</CardHeader>
                        <CardBody> 
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            )
        }
    }

    render(){
        return(
            <div className="allNotes">
                <div className="allNotesHeader mt-4" style={{ textAlign: "center"}}>
                    <h1 >Welcome to NoteSpark</h1>
                    {!this.props.notes[0] ? 
                        <Fragment>
                            <h2>Please create a note to get started</h2>
                            <a href="./create_note" className="btn btn-primary">CREATE</a>
                        </Fragment>
                        :
                        <h2>You have {this.props.notes.length} notes stored with use</h2>
                    }
                </div>

                <Container className="mt-4">
                    {this.handleRenderNotes()}
                </Container>
            </div>
        )
    }   
}

export default AllNotes;