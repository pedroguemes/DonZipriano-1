import { dividerClasses } from "@mui/material";
import Pencil from '../assets/pencil.png'
import {React, useEffect, useState} from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'

const AdminTabPanel = (props) =>{
    const [selectedId, setSelectedId] = useState('')
    const [editType, setEditType] = useState("");
    const [editInput, setEditInput] = useState('')

    let editPencil=(plate,type) => <OverlayTrigger
    placement="top"
    delay={{ show: 25, hide: 25 }}
    overlay={renderEdit}
  >
    <img onClick={()=>handleEdit(plate._id,plate[type], type)} src={Pencil} alt='pencil' className="admin-edit-icon"/>
    </OverlayTrigger>



function handleEdit(id, input, type){
    switch(type){
      case "name":
          console.log("paso por el name")
          setEditType(type)
          setEditInput(input)
          if(selectedId === id && editType === type){
              setSelectedId('')
              console.log(1)
          }else if(selectedId === "" ){
              setSelectedId(id)
              console.log(2)
          }else if(selectedId !== "" && selectedId !==id){
            setSelectedId(id)

            console.log(3)
          }
          break
      case 'description':
          console.log("paso por el description")
          setEditType(type)
          setEditInput(input)
          if(selectedId === id && editType === type){
              setSelectedId('')
          }else if(selectedId === "" ){
              setSelectedId(id)
              
          }else if(selectedId !== "" && selectedId !==id){
            setSelectedId(id)

          }
          break
      
      case 'price':
          console.log("paso por el price")
          setEditType(type)
          setEditInput(input)
          if(selectedId === id && editType === type){
              setSelectedId('')
          }else if(selectedId === "" ){
              setSelectedId(id)
          }else if(selectedId !== "" && selectedId !==id){
            setSelectedId(id)
          }
          break
      default:
          return{

                }
    }

    
  //  aqui capturo el id de la comida y si es precio o no
}

const renderEdit = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Editar
    </Tooltip>
  );

  console.log(props.timeFood)
    return(
        <Tab.Pane eventKey={props.timeFood}>
          <p>entradas</p>
          <div className="d-flex flex-wrap">
          {props.meals.map(plate=> 
           <Card className="col-12 col-md-6 col-xxl-4 col-xl-4 col-lg-6 col-sm-12 col-xs-12">
           <Card.Img variant="top" src={plate.image} />
           <Card.Body className="admin-card-body d-flex flex-column align-items-around justify-content-between">
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil(plate,'name')}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0">{selectedId === plate._id && editType=== 'name'?  <OverlayTrigger
                              key="1"
                              placement="top"
                              overlay={
                                <Tooltip id="key">Presiona enter para editar</Tooltip>
                              }
                            ><input value={editInput} onChange={(e) => setEditInput(e.target.value)} /></OverlayTrigger> : <Card.Text className="text-dark">{plate.name}</Card.Text>}</Col>
               </Row>
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil(plate,'description')}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0">{selectedId === plate._id && editType=== 'description'?  <textarea className="admin-textarea" rows="3" value={editInput} onChange={(e) => setEditInput(e.target.value)}></textarea> : <Card.Text className="text-dark">{plate.description}</Card.Text>}</Col>
               </Row>
               <Row>
                   <Col xs={1} sm={1} lg={1} md={1}  className="p-0">{editPencil(plate,'price')}</Col>
                   <Col xs={11} sm={11} lg={11} md={11} className="p-0">{selectedId === plate._id && editType=== 'price'?  <input value={editInput} onChange={(e) => setEditInput(e.target.value)}></input> : <Card.Text className="text-dark">${plate.price}</Card.Text>}</Col>
               </Row> 
           </Card.Body>
           <Card.Footer className="bg-danger">
             <small className="text-white d-flex justify-content-end">Eliminar</small>
           </Card.Footer>
         </Card>  
            )}
            </div>
        </Tab.Pane>
    )
}

export default AdminTabPanel