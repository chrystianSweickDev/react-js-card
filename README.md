# react-js-card

react-js-card is a React component to build a simple and beautifully 

## Installation

Use the npm package manager to install react-js-card.

```bash
npm install react-js-card
```

## Usage

```javascript
import React from 'react';
import Card from 'react-js-card';

function Home(props) {
    const header = <h2>Title</h2>
    const body = <p>Loren ipsun....</p>
    const footer = <p>Loren ipsun....</p>

    return (
        <div>
            <div className='container '>
                <div className='d-flex justify-content-center'>
                    <div className='col-6'>
                        <Card
                            header={header}
                            body={body}
                            footer={footer}
                            theme={'danger'} //bootstrap pattern 
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
