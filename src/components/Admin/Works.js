import { useContext } from 'react';
import { Button } from 'baseui/button';
import { Badge } from 'baseui/badge';
import { Plus, Overflow, Delete } from 'baseui/icon';
import AdminContext from './AdminContext.js';

const Works = () => {
  const { works, tags, setModalState, setValue } = useContext(AdminContext);

  const workState = { type: 'work', isOpen: true };

  return (
    <div className="admin__section">
      <h2 className="admin__section-title">Works</h2>
      <Button
        size="compact"
        endEnhancer={<Plus color="var(--bg-color)" size={20} />}
        onClick={() => {
          setModalState({ ...workState, action: 'add' });
          setValue({});
        }}
      >
        Add
      </Button>

      <div className="admin__section-container">
        {works.map((work) => {
          return (
            <div key={work.id} className="admin__item">
              <div className="admin__item-icon">
                <img src={work.liveLink + 'favicon.ico'} alt="preview" />
              </div>
              <div className="admin__item-title">{work.title}</div>
              <div className="admin__item-tags">
                {work?.tags?.map((id) => {
                  const tag = tags[tags.findIndex((tag) => tag.id === id)];

                  return (
                    <Badge key={id} content={tag?.name} color={tag?.color} />
                  );
                })}
              </div>
              <Button
                kind="tertiary"
                size="mini"
                onClick={() => {
                  setModalState({ ...workState, action: 'edit' });
                  setValue(work);
                }}
              >
                <Overflow size={28} />
              </Button>
              <Button
                kind="tertiary"
                size="mini"
                onClick={() => {
                  setModalState({
                    ...workState,
                    action: 'delete',
                  });
                  setValue(work);
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

export default Works;
