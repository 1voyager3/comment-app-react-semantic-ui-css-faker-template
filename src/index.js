import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

import faker from "faker";



const App = () => {
    return (
      <div className="ui container comments">

          <ApprovalCard>
              <CommentDetail
                  author="Sam"
                  timeAgo="Today at 4:45PM"
                  content="Very good!"
                  avatar={faker.image.avatar()}
              />
          </ApprovalCard>

          <ApprovalCard>
              <CommentDetail
                  author="Alex"
                  timeAgo="Today at 2:00AM"
                  content="Amazing!"
                  avatar={faker.image.avatar()}
              />
          </ApprovalCard>

          <ApprovalCard>
              <CommentDetail
                  author="Jane"
                  timeAgo="Yesterday at 5:00PM"
                  content="Nice blog post!"
                  avatar={faker.image.avatar()}
              />
          </ApprovalCard>

      </div>
    );
};

ReactDOM.render(<App />,
    document.querySelector('#root'));