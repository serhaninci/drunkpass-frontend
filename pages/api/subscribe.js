export default async (req, res) => {
    // 1. Destructure the email address from the request body.
    const { email } = req.body;
  
    if (!email) {
      // 2. Throw an error if an email wasn't provided.
      return res.status(400).json({ error: 'Email is required' });
    }
  
    try {
      
   
      // 5. The status of 'subscribed' is equivalent to a double opt-in.
      const data = {
        email_address: email,
        status: 'subscribed'
      };
  
      // 6. Send a POST request to Mailchimp.
      const response = await fetch(
        `https://bt1wwl8318.execute-api.eu-west-2.amazonaws.com/v1/prefs`,
        {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      );
  
      // 7. Swallow any errors from Mailchimp and return a better error message.
      if (response.status >= 400) {
        return res.status(400).json({
          error: `There was an error subscribing to the newsletter. Shoot me an email at [me@leerob.io] and I'll add you to the list.`
        });
      }
  
      // 8. If we made it this far, it was a success! 🎉
      return res.status(201).json({ error: '' });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  };