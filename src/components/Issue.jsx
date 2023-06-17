import * as React from "react";
import Labels from "./Labels";
import Assigned from "./Assigned";
import { diff } from "../logic/logic";
import { FaRegDotCircle } from 'react-icons/fa';

const Issue = ({ issue }) => {
  const { labels, assignees } = issue;

  return (
    <div className='container'>
    <div className="issue">
    <FaRegDotCircle color="green"></FaRegDotCircle>
      <div className="issue__details">
        <div className="issue__details__title">
          <div className="issue__details__title--text">{issue.title}</div>
          {labels.map((item) => (
            <Labels labelitem={item} />
          ))}
        </div>
        <div className="issue__details__meta">
          <div>#{issue.number}</div>
          <div>opened {diff(issue.updated_at)} ago by</div>
          {issue.user ? <div>{issue.user.login}</div> : null}
        </div>
      </div>
      <div className="issue__assignees">
        {assignees.map((assignitem) => (
          <Assigned assignitem={assignitem} />
        ))}
      </div>
      <div className="issue__comments">
        {issue.comments ? (
          <div className="issue__comments__counter">
            <div className="material-icons">chat_bubble_outline</div>
            <div>{issue.comments}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    </div>
  );
};

export default Issue;
