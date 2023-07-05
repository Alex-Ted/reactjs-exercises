import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  // Fetch repository data
  useEffect(() => {
    axios // CRUD (Create, Read, Update, Delete)| POST, GET, PUT, PATCH, DELETE
      .get('https://api.github.com/users/Alex-Ted/repos')
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-blue-800" >My Repositories</h1>
      <div className="repo-list">
        {repos.map(repo => (
          <div key={repo.id} className="repo-card">
            
            <div>
              <p>{repo.created_at} <span style={{marginLeft:20, fontWeight:'normal'}}>{repo.topics[0]}</span></p>
              <h2 className="font-bold">{repo.name}</h2>
              <p>{repo.description}</p>
              <div className="inline-by-line" style={{display:'flex', padding:2}}>
                <img src={repo.owner.avatar_url} alt="Repo Owner" className="avatar" />
                <div className='batch' style={{marginTop:1}}>
                  <h4 style={{marginTop:1}}>{repo.owner.login}</h4>
                  <p >Batch RF-1</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;
