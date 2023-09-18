import React from 'react';
import Chip from '@mui/material/Chip';

const TagList = ({ tags }) => {
  return (
    <div className="tag-sell">
      {tags.map((tag, index) => (
          <Chip key={index} label={tag.name} />
      ))}
    </div>
  );
};

export default TagList;