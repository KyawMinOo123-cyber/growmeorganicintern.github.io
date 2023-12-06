import {useState} from'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


interface Department {
    department: string;
    sub_departments: string[];
  }
  
  interface MyDepartmentProps {
    data: Department[];
  }

const Departments = ({data}:MyDepartmentProps)=>{
    const[departmentChecked,setDepartmentChecked] = useState(false);
    const [firstSubChecked, setFirstSubChecked] = useState(false);
    const [secondSubChecked, setSecondSubChecked] = useState(false)

// states for second accordion
    const [parentChecked,setParentChecked] = useState(false);
    const [firstChild,setFirstChild] = useState <boolean>(false);
    const [secondChild,setSecondChild] = useState<boolean>(false);
    const [thirdChild,setThirdChild] = useState<boolean>(false);



//handleChange for first accordion
    const handleChange1 = () => {
      setDepartmentChecked(!departmentChecked)
      !departmentChecked?setFirstSubChecked(true):firstSubChecked;
      !departmentChecked?setSecondSubChecked(true):secondSubChecked;
    };
  
    const handleChange2 = () => {
      setFirstSubChecked(!firstSubChecked)
    };
  
    const handleChange3 = () => {
      setSecondSubChecked(!secondSubChecked)
    };

    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label={data[0].sub_departments[0]}
            control={<Checkbox checked={firstSubChecked}
            onChange={handleChange2} />}
          />
          <FormControlLabel
            label={data[0].sub_departments[1]}
            control={<Checkbox checked={secondSubChecked}
            onChange={handleChange3} />}
          />
        </Box>
      );

//handleChange for second accordion 
      const handleParentChange = ()=>{
        setParentChecked(!parentChecked)
        !parentChecked?setFirstChild(true) :firstChild;
        !parentChecked?setSecondChild(true) :secondChild;
        !parentChecked?setThirdChild(true): thirdChild;
      }
      const handleChange =()=>{
        setFirstChild(!firstChild)
      }
      const handleChangeTwo =()=>{
        setSecondChild(!secondChild)
      }
      const handleChangeThree =()=>{
        setThirdChild(!thirdChild)
      }


//children for second accordion
      const childrenTwo = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <FormControlLabel
            label={data[1].sub_departments[0]}
            control={<Checkbox checked={firstChild} onChange={handleChange} />}
          />
          <FormControlLabel
            label={data[1].sub_departments[1]}
            control={<Checkbox checked={secondChild} onChange={handleChangeTwo} />}
          />
          <FormControlLabel
            label={data[1].sub_departments[2]}
            control={<Checkbox checked={thirdChild} onChange={handleChangeThree} />}
          />
        </Box>
      );

    return<Stack>
          <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="one"
                  id="one"
              >
                        <FormControlLabel
                          label={data[0].department}
                          control={
                          <Checkbox
                              checked={(firstSubChecked && secondSubChecked)?true : departmentChecked}
                              onChange={handleChange1}
                          />
                          }
                      />

              </AccordionSummary>
              <AccordionDetails>
                  {children}
              </AccordionDetails>
          </Accordion>

          <Accordion>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="two"
                  id="two"
              >
                        <FormControlLabel
                          label={data[1].department}
                          control={
                          <Checkbox
                              checked={(firstChild && secondChild && thirdChild)?true:parentChecked}
                              onChange={handleParentChange}
                          />
                          }
                      />

              </AccordionSummary>
              <AccordionDetails>
                  {childrenTwo}
              </AccordionDetails>
          </Accordion>
    </Stack>
}

export default Departments