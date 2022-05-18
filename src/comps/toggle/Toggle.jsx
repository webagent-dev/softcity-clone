import React, {useState }  from 'react'
import { ToggleContainer } from '../navbar/navbar.style'
import { ToggleWrapper, ListWrapper, List, ListBtn  } from './toggle.style'
function Toggle() {
  const [toggleAbout, setToggleAbout] = useState(false)
  const [toggleService, setToggleService] = useState(false)
  return (
    <ToggleContainer>
      <ToggleWrapper>
      <ListWrapper>
        <List>home</List>
      </ListWrapper>
            <ListWrapper>
        <List> about</List>
        <ListBtn></ListBtn>
        {toggleAbout && (
          <>
            <ListWrapper>
        <List>our Company</List>
            </ListWrapper>
              <ListWrapper>
        <List>our Team</List>
            </ListWrapper>
              <ListWrapper>
        <List>our clientale</List>
      </ListWrapper>
          </>
        )}
      </ListWrapper>
            <ListWrapper>
        <List>service</List>
            <ListBtn></ListBtn>
      </ListWrapper>
      {
        toggleService && (
        <>
            <ListWrapper>
        <List>mobile app development</List>
            </ListWrapper>
                <ListWrapper>
        <List>web app development</List>
      </ListWrapper>
          <ListWrapper>
        <List>computational intelligence</List>
            </ListWrapper>
                <ListWrapper>
        <List>smart auomation systems</List>
            </ListWrapper>
                <ListWrapper>
        <List>wireless LAN internet systems</List>
            </ListWrapper>
                <ListWrapper>
        <List>digital surveillence systems</List>
            </ListWrapper>
                <ListWrapper>
        <List>access control systems</List>
            </ListWrapper>
                <ListWrapper>
        <List>fire suppression systems</List>
            </ListWrapper>
                <ListWrapper>
        <List>cooperate telephone system</List>
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