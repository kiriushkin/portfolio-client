import { useContext } from 'react';
import { Button } from 'baseui/button';
import { Badge } from 'baseui/badge';
import { Plus, Overflow, Delete } from 'baseui/icon';
import AdminContext from './AdminContext.js';

const Tags = () => {
  const { tags, setModalState, setValue } = useContext(AdminContext);
  const tagState = { type: 'tag', isOpen: true };

  return (
    <div className="admin__section">
      <h2 className="admin__section-title">Tags</h2>
      <Button
        size="compact"
        endEnhancer={<Plus color="var(--bg-color)" size={20} />}
        onClick={() => {
          setModalState({ ...tagState, action: 'add' });
          setValue({});
        }}
      >
        Add
      </Button>

      <div className="admin__section-container">
        {tags.map((tag) => {
          return (
            <div key={tag.id} className="admin__item">
              <div className="admin__item-title">
                <Badge content={tag.name} color={tag.color} />
              </div>
              <Button
                kind="tertiary"
                size="mini"
                onClick={() => {
                  setModalState({ ...tagState, action: 'edit' });
                  setValue(tag);
                }}
              >
                <Overflow size={28} />
              </Button>
              <Button
                kind="tertiary"
                size="mini"
                onClick={() => {
                  setModalState({ ...tagState, action: 'delete' });
                  setValue(tag);
                }}
              >
                <Delete size={28} />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
