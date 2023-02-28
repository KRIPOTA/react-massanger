import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function NewsPagePresent(props) {
    return (
        <>
            <h1>News</h1>
            <Button
                variant="contained"
                color="success"
                onClick={props.getFetchNews}
                sx={{ marginTop: '10px' }}
            >
                Get News
            </Button>
            {props.loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '10px' }}>
                {!props.loading && props.news.map((item) => (
                    <Box sx={{ marginBottom: '10px', display: 'flex' }}>
                        <Card sx={{ maxWidth: 345 }} key={item.id}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.imageUrl}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.summary}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                ))
                }
            </Box>
            {props.error && <p style={{ color: 'red' }}>{props.error}</p>}
        </>
    )
}
