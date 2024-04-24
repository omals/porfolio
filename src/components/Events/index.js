import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './EventsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { events } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="events">
      <Wrapper>
        <Title>Events</Title>
        <Desc>
          I have organised, volunteered and participated in various workshops, talk sessions and Hackthons. Here are some of the events.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'organised' ?
            <ToggleButton active value="organised" onClick={() => setToggle('organised')}>ORGANISED</ToggleButton>
            :
            <ToggleButton value="organised" onClick={() => setToggle('organised')}>ORGANISED</ToggleButton>
          }
          <Divider />
          {toggle === 'volunteered' ?
            <ToggleButton active value="volunteered" onClick={() => setToggle('volunteered')}>VOLUNTEERED</ToggleButton>
            :
            <ToggleButton value="volunteered" onClick={() => setToggle('volunteered')}>VOLUNTEERED</ToggleButton>
          }
          <Divider />
          {toggle === 'participated' ?
            <ToggleButton active value="participated" onClick={() => setToggle('participated')}>PARTICIPATED</ToggleButton>
            :
            <ToggleButton value="participated" onClick={() => setToggle('participated')}>PARTICIPATED</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && events
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {events
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects