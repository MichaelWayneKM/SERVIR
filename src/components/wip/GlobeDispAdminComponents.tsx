import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { LegacyRef, useRef, useState } from "react";
import { CustomizedSteppers } from "./Stepper";
import { InfoOutlined } from "@mui/icons-material";

function GlobeDispAdminComponents() {
  const [lat, setLat] = useState<number>(-999);
  const [lon, setLon] = useState<number>(-999);

  const [image, setImage] = useState();
  const [country, setCountry] = useState("{ Country ");
  const [town, setTown] = useState("City }");
  const [eventDate, setEventDate] = useState("{ Event Date }");

  const [cardParagraph, setCardParagraph] = useState(
    "{ Card Description ... }"
  );

  const photoRef = useRef<any>();

  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CustomizedSteppers activeStep={activeStep} />

      {activeStep == 0 ? (
        <Box
          component="form"
          noValidate={false}
          autoComplete="off"
          onSubmit={(e: any) => e.preventDefault()}
          mt={5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div
            className="information"
            style={{
              backgroundColor: "#00006510",
              marginTop: 10,
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              color: "#00006590",
              marginLeft: 4 + "%",
              marginRight: 4 + "%",
              marginBottom: 42,
              padding: 5,
            }}
          >
            <InfoOutlined style={{ margin: 8 }} />
            <div>
              The geographic coordinate system is a spherical or ellipsoidal
              coordinate system for measuring and communicating positions
              directly on the Earth as latitude and longitude.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: 100 + "%",
              flexWrap: "wrap",
              marginBottom: 90,
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Latitude"
              type={"number"}
              style={{ marginBottom: 15, width: "100%", maxWidth: 350 }}
              //value={lat}

              onChange={(e) => setLat(+e.target.value)}
            />

            <TextField
              required
              id="outlined-required"
              label="Longitude"
              type={"number"}
              style={{ marginBottom: 15, width: "100%", maxWidth: 350 }}
              //value={lon}
              onChange={(e) => setLon(+e.target.value)}
            />
          </div>

          <div className="bottom-step" style={{ marginBottom: 30 }}>
            <Button
              type="submit"
              variant="contained"
              style={{ float: "right", marginRight: "2%" }}
              onClick={() => setActiveStep((prev) => prev + 1)}
              disabled={!(lat !== -999 && lon !== -999)}
            >
              next
            </Button>
          </div>
        </Box>
      ) : null}

      {activeStep == 1 ? (
        <Box
          component="form"
          noValidate={false}
          autoComplete="off"
          onSubmit={(e: any) => e.preventDefault()}
          mt={5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            marginLeft: 4 + "%",
            marginRight: 4 + "%",
          }}
        >
          <Card
            sx={{
              maxWidth: 345,
              pointerEvents: "all",
              opacity: 0.9,
              marginTop: 1,
              marginBottom: 2,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="/assets/clouds.png"
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`${country}, ${town}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {cardParagraph}
              </Typography>
              <Typography variant="caption" color="text.primary">
                {eventDate}
              </Typography>
            </CardContent>
            <CardActions>
              <Button disabled size="small" onClick={() => null}>
                Close
              </Button>
              <Button disabled size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <div style={{ marginTop: 20 }}>
            <h5>Card Image</h5>
            <hr />

            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              ref={photoRef}
            />
          </div>

          <div style={{ marginTop: 40 }}>
            <h5>Meta Data*</h5>
            <hr />
            <div>
              <TextField
                required
                id="outlined-required"
                label="Country"
              
                style={{
                  marginBottom: 15,
                  width: "100%",
                  maxWidth: 350,
                  marginRight: 5,
                }}
                onChange={(e) => setCountry(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="City"
                
                style={{ marginBottom: 15, width: "100%", maxWidth: 350 }}
                onChange={(e) => setTown(e.target.value)}
              />
            </div>

            <TextField
              id="standard-multiline-static"
              label="Card Description"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="outlined"
              style={{ marginBottom: 15, width: "100%", maxWidth: 705 }}
              onChange={(e) => setCardParagraph(e.target.value)}
            />
            
          </div>

          <div className="bottom-step" style={{ marginBottom: 30, marginTop: 40 }}>
          <Button
              type="submit"
              variant="contained"
              style={{ float: "left", marginRight: "2%" }}
              onClick={() => setActiveStep((prev) => prev - 1)}
              disabled={!(lat !== -999 && lon !== -999)}
            >
              Prev
            </Button>

            <Button
              type="submit"
              variant="contained"
              style={{ float: "right", marginRight: "2%" }}
              onClick={() => setActiveStep((prev) => prev + 1)}
              disabled
            >
              next
            </Button>
          </div>
        </Box>
      ) : null}
    </div>
  );
}

export default GlobeDispAdminComponents;
