import {CardMedia} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const HowItWorks = () => {

    return <>
    <h2>How it works</h2>
        <Grid container spacing={2} justifyContent="center"
              alignItems="flex-start">
            <Grid item xs={6} sm={3} md={2} key={1}>
        <Card sx={{ maxWidth: 345 }}>
            {/*<CardMedia*/}
            {/*    component="img"*/}
            {/*    height="140"*/}
            {/*    image="https://source.unsplash.com/random"*/}
            {/*    alt="Random Image"*/}
            {/*/>*/}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Step 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Upload or search items you own and tag as
                    "My Assets" or "Watchlist". Our system
                    continuously automatically add
                </Typography>
            </CardContent>
        </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={2} key={2}>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Step 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Add your original purchase price, other
                    information for each item you have added
                    tagged as "My Assets"
                </Typography>
            </CardContent>
        </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={2} key={3}>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Step 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Monitor your portfolio - cost basis
                </Typography>
            </CardContent>
        </Card>
            </Grid>
            <Grid item xs={6} sm={3} md={2} key={4}>
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Step 4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Take action - Authenticate, Appraisal,
                    Exchange, Buy Fractional Ownership
                    of vintage assets
                </Typography>
            </CardContent>
        </Card>
            </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <Grid container spacing={2} justifyContent="center"
              alignItems="center">
            <Grid item xs={6} sm={3} md={2} key={5}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Get started today!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">START FREE</Button>
                        {/*    <Button size="small">Learn More</Button>*/}
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </>
}

export default HowItWorks;