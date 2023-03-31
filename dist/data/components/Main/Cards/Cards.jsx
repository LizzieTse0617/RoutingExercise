import React from 'react';
import CardItem from './CardsItem';
import { Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Card.css';
//material-UI
import Grid from '@mui/material/Grid';

export default function User() {
  const { uid } = useParams();

  const [cards, setCards] = useState([]);
  useEffect(() => {
    if (cards.length === 0) {
      fetch('https://random-data-api.com/api/v2/credit_cards?size=20')
        .then((res) => res.json())
        .then((cards) => {
          setCards(cards);
        })
        .catch(console.error);
    }
  }, []);

  const card = cards.find((u) => u.uid === uid);

  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* UserList */}

          <ul className="cardItemList">
            <h2>Credit cards page</h2>
            <h3>Credit card List</h3>
            {cards.length > 0 ? (
              cards.map((card) => <CardItem key={card.uid} card={card} />)
            ) : (
              <li>No detail found</li>
            )}
          </ul>
        </Grid>
        <Grid item xs={8}>
          {/* UserDetail */}
          <Outlet
            className="cardDetail"
            context={
              card &&
              card.id &&
              card.credit_card_expiry_date &&
              card.credit_card_type
                ? card
                : null
            }
          />
        </Grid>
      </Grid>
    </main>
  );
}
