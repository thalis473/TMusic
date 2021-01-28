import React from 'react';
import { connect } from 'react-redux';


import { bindActionCreators } from 'redux';
import * as MusicaAction from '../../store/action/index';

const playlist = ({ musicas, tocarMusica,pararMusica }) => {
  return (
    <section>
        <div className='container'>
            <h1  className="text-light bg-dark">PlayList de Música</h1>
            </div>
      <ul className="container ">
        {musicas.map((musica) => (
          <li className="navbar text-primary" key={musica.id}>
            {musica.titulo} <br/> {musica.cantor} | {musica.ano}
            <button className=" btn btn-outline-success" onClick={() => tocarMusica(musica)}> Play </button>
            <button className="btn btn-outline-danger" onClick={() => pararMusica(musica)}> STOP </button>
          </li>
        ))}
      </ul>
    
    </section>
  );
};

const mapStateToProps = (state) => ({
  musicas: state.musicas.playlist,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MusicaAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(playlist);