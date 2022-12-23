import { connect } from 'react-redux';
import { getPost } from '../../store/selectors/PostSelectors';
import { Link } from "react-router-dom";
function SinglePost(props) {
    return (
      <div>
        <Link to="/posts" className="px-2">
          <button className="bg-red-500 text-white p-2">GO Back</button>
        </Link>
        <div style={{margin:"20px"}}>Job Details Page</div>

        <div>Id: {props.post.id}</div>
        <div>Job Title :{props.post.title}</div>
        
        <div>Company Name: {props.post.company} </div>
        <div>Salary : {props.post.salary} </div>
        <div>Date Time: {props.post.datetime} </div>
        <div>Description: {props.post.description}</div>
      </div>
    );
}

const makeStateToProps = () => {
    const post = getPost();
    return (state, props) => {
        return {
            post: post(state, props.match.params.id),
        };
    };
};

export default connect(makeStateToProps)(SinglePost);
