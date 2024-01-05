
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Newproject from "./components/Newproject";
import Noprojectselected from "./components/Noprojectselected";
import SelectedProject from "./components/SelectedProject";
function App() {
  const[project,setProject] = useState({
    selectedprojectId :undefined,
    projects:[]
  })
  function handleaddproject(){
    setProject(prev =>{
      return{
        ...prev,
        selectedprojectId :null,
      }
    })
  }
  function handleCancel(){
    setProject(prev =>{
      return{
        ...prev,
        selectedprojectId :undefined,
      }
    })
  }
  function handlesideadd(projectData){
    setProject(prev=>{
      const newProject = {
        ...projectData,
        id:Math.random()
      }
      return {
      ...prev,
      selectedprojectId:undefined,
      projects : [...prev.projects,newProject],
  }})
  }
  function handleSelectedProject(id){
    setProject((prev) =>{
      return{
        ...prev,
        selectedprojectId :id,
      }
    })
  }
  const selectedProject = project.projects.find(project=>project.id===project.selectedprojectId)
  console.log(selectedProject)

  let content = <SelectedProject project={selectedProject}/>
  if(project.selectedprojectId===null){
    content = <Newproject onAdd={handlesideadd} onCancel={handleCancel}/>
  }else if(project.selectedprojectId===undefined){
    content = <Noprojectselected onStartAddNewProject={handleaddproject}/>
  }
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleaddproject} projects={project.projects} onSelectProject={handleSelectedProject} />
      {content}
    </main>
    </>
  );
}

export default App;
