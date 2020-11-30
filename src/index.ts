import * as dotenv from 'dotenv';
import app from './Server';
import mongoose from 'mongoose';

dotenv.config();

const PORT = parseInt((process.env.PORT || "8080"), 10);
const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PWD}@${process.env.ATLAS_CLUSTER}/${process.env.ATLAS_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
