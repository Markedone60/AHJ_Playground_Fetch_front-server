//front end server for fetch lesson

class SubscriptionApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async add(user) {
    const request = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });

    const result = await request;
    
    if (!result.ok) {
      console.log('Error');
    }

    const json = await result.json();
    const status = json.status;

    console.log(status);
  }

  async remove(user) {
    const query = '/?phone=' + user.phone;
    
    const request = fetch(this.apiUrl + query, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const result = await request;

    if (!result.ok) {
      console.log('Error');

      return;
    }

    const json = await result.json();
    const status = json.status;

    console.log(status);
  }
}

window.api = new SubscriptionApi('http://localhost:7070/');
