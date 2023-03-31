import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
//materia-card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function UserDetail() {
  const { uid } = useParams();
  const user = useOutletContext();
  if (!user) {
    return null;
  } else if (user.uid !== uid) {
    return <NotFound />;
  }

  return (
    <section>
      <div className="userdetail">
        <h3>User Detail</h3>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 250 }} image={user.avatar} title={uid} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="body2">ID: {uid}</Typography>
            <Typography>Email: {user.email}</Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
