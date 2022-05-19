import React, {useState }  from 'react'
import { ToggleContainer } from '../navbar/navbar.style'
import { ToggleWrapper, ListWrapper, List, ListBtn, Lists  } from './toggle.style'
function Toggle() {
  const [toggleAbout, setToggleAbout] = useState(false)
  const [toggleService, setToggleService] = useState(false)
  return (
    <ToggleContainer>
      <ToggleWrapper>
      <ListWrapper>
        <List>home</List>
      </ListWrapper>
            <ListWrapper onClick={() => setToggleAbout(!toggleAbout)}>
        <List> about</List>
      {toggleAbout ? <ListBtn> - </ListBtn> : <ListBtn> + </ListBtn>}
        </ListWrapper>
                {toggleAbout && (
          <>
            <ListWrapper>
        <Lists>our Company</Lists>
            </ListWrapper>
              <ListWrapper>
        <Lists>our Team</Lists>
            </ListWrapper>
              <ListWrapper>
        <Lists>our clientale</Lists>
      </ListWrapper>
          </>
        )}
            <ListWrapper onClick={() => setToggleService(!toggleService)}>
        <List>service</List>
              {toggleService ? <ListBtn> - </ListBtn> : <ListBtn> + </ListBtn>}
      </ListWrapper>
      {
        toggleService && (
        <>
            <ListWrapper>
        <Lists>mobile app development</Lists>
            </ListWrapper>
                <ListWrapper>
        <Lists>web app development</Lists>
      </ListWrapper>
          <ListWrapper>
        <Lists>computational intelligence</Lists>
            </ListWrapper>
                <ListWrapper>
        <Lists>smart auomation systems</Lists>
            </ListWrapper>
                <ListWrapper>
        <Lists>wireless LAN internet systems</Lists>
            </ListWrapper>
                <ListWrapper>
        <Lists>digital surveillence systems</Lists>
            </ListWrapper>
                <ListWrapper>
        <Lists>access control systems</Lists>
            </ListWrapper>
                <ListWrapper>
        <Lists>fire suppression systems</Lists>
            </ListWrapper>
                <ListWrapper>
        <Lists>cooperate telephone system</Lists>
      </ListWrapper>
          </>
        )
      }
        <ListWrapper>
        <List>awards</List>
      </ListWrapper>
        <ListWrapper>
        <List>in the news</List>
      </ListWrapper>
        <ListWrapper>
        <List>portfolio</List>
      </ListWrapper>
        <ListWrapper>
        <List>testimonials</List>
      </ListWrapper>
        <ListWrapper>
        <List>contact</List>
      </ListWrapper>
      </ToggleWrapper>
      </ToggleContainer>
  )
}

export default Toggle