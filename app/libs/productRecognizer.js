import mockData from './mockData';

class ProductRecognizer {
  constructor() {
    this._client_id = 'c1SqIFJVEUzXhQyxbe_Jdj34-yxpDxudQvxFl1h5';
    this._client_secret = '9mQigA11gJ4WmpcQ44anNo10Ry8Gk9DrZPb3WCTs';
  }

  async recognizeImage(base64) {
    const token = await this.getToken();
    const postData = {
      "query": {
        "ands": [
          {
            "output": {
              "input": {
                "data": {
                  "image": {
                    base64
                  }
                }
              }
            }
          }
        ]
      }
    };

    const searchResult = await fetch('https://api.clarifai.com/v2/searches?per_page=40', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData),
    });
    const searchJson = await searchResult.json();
    const products = searchJson.hits.map(h => h.input.data.metadata);
    return products;
  }

  async getToken() {
    const form = new FormData();
    form.append('client_id', this._client_id);
    form.append('client_secret', this._client_secret);
    form.append('grant_type', 'client_credentials');
    const tokenResult = await fetch('https://api.clarifai.com/v1/token/', {
      method: 'POST',
      body: form
    });
    const tokenJson = await tokenResult.json();
    return tokenJson.access_token;
  }

  async mockProduct() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockData), 500);
    });
  }
}

export default new ProductRecognizer();
