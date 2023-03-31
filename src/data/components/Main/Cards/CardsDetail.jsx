import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
//materia-card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardDetail() {
  const { uid } = useParams();
  const card = useOutletContext();
  if (!card) {
    return null;
  } else if (card.uid !== uid) {
    return <NotFound />;
  }

  return (
    <section>
      <div className="carddetail">
        <h3>Credit Card Detail</h3>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ID: {card.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Credit Card Expiry Date: {card.credit_card_expiry_date}
            </Typography>
            <Typography>Credit Card Type: {card.credit_card_type}</Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
