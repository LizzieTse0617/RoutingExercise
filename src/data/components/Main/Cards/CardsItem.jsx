import React from 'react';
import { NavLink } from 'react-router-dom';
//material-UI icon
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

export default function UserItem({ card }) {
  return (
    <section className="carditem">
      <NavLink
        className={({ isActive }) => {
          return isActive ? 'big active' : '';
        }}
        to={`/credit_cards/${card.uid}`}
      >
        <SentimentSatisfiedAltOutlinedIcon>
          star
        </SentimentSatisfiedAltOutlinedIcon>
        {card.id}-{card.credit_card_type}
      </NavLink>
    </section>
  );
}
