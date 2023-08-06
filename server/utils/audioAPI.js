import fetch from 'node-fetch';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/vnd.api+json',
    'content-type': 'application/vnd.api+json',
    Authorization: 'Token ${process.env.SOUNDSTRIPE_API_KEY}'
  }
};
const songExample = '6154'

const audio = async (song) => {
  const url = `https://api.soundstripe.com/v1/songs/${song}`;
  try {
    const res = await fetch(url, options);

    const data = await res.json();

    return data;

  } catch (err) {
    console.log(err)
    return err;
  }
}

export default audio;


