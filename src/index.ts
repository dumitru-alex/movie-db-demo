import * as dotenv from 'dotenv';
import app from './Server';
import mongoose from 'mongoose';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PWD}@${process.env.ATLAS_CLUSTER}/${process.env.ATLAS_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

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
