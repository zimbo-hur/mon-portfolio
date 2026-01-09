import { useState } from 'react';
import projectsData from '../data/projects.json';

export default function Home() {
  const [projects] = useState(projectsData.projects);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    
      
        Mon Portfolio
        Projets académiques et professionnels
      

      
        <button onClick={() => setFilter('all')} style={filter === 'all' ? styles.activeBtn : styles.btn}>
          Tous
        
        <button onClick={() => setFilter('PDF')} style={filter === 'PDF' ? styles.activeBtn : styles.btn}>
          Rapports
        
        <button onClick={() => setFilter('Power BI')} style={filter === 'Power BI' ? styles.activeBtn : styles.btn}>
          Dashboards
        
        <button onClick={() => setFilter('Site Web')} style={filter === 'Site Web' ? styles.activeBtn : styles.btn}>
          Sites Web
        
      

      
        {filteredProjects.map(project => (
          
            
              
            
            
              {project.type}
              {project.title}
              {project.description}
              {project.date}
              
                Voir le projet →
              
            
          
        ))}
      

      
        © 2025 - Tous droits réservés
      
    
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '60px 20px',
    textAlign: 'center',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    padding: '30px 20px',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '10px 20px',
    border: '2px solid #2c3e50',
    backgroundColor: 'white',
    color: '#2c3e50',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  activeBtn: {
    padding: '10px 20px',
    border: '2px solid #2c3e50',
    backgroundColor: '#2c3e50',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '20px',
  },
  badge: {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: '#3498db',
    color: 'white',
    fontSize: '12px',
    borderRadius: '3px',
    marginBottom: '10px',
  },
  cardTitle: {
    margin: '10px 0',
    fontSize: '20px',
    color: '#2c3e50',
  },
  cardDesc: {
    color: '#666',
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '10px',
  },
  date: {
    fontSize: '12px',
    color: '#999',
    marginBottom: '15px',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
  },
};