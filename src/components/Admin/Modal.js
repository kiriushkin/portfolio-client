import { useState, useEffect, useContext } from 'react';
import {
  Modal as BaseModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';
import { Input } from 'baseui/input';
import { Textarea } from 'baseui/textarea';
import { Select } from 'baseui/select';
import AdminContext from './AdminContext.js';

const WorkBody = ({ work, setWork }) => {
  const { tags } = useContext(AdminContext);

  useEffect(() => {
    if (!work.value && work.tags) {
      setWork({
        ...work,
        value: work.tags.map((tag) => {
          return { id: tag };
        }),
      });
    }
  }, [work]);

  return (
    <div className="admin__modal-container">
      <Input
        placeholder="Title"
        value={work.title ?? ''}
        onChange={(e) => {
          setWork({ ...work, title: e.target.value });
        }}
        required
      />
      <Input
        placeholder="Name"
        value={work.name ?? ''}
        onChange={(e) => {
          setWork({ ...work, name: e.target.value });
        }}
        required
      />
      <Textarea
        placeholder="Description"
        value={work.description ?? ''}
        onChange={(e) => {
          setWork({ ...work, description: e.target.value });
        }}
      />
      <Input
        placeholder="Live Link"
        value={work.liveLink ?? ''}
        onChange={(e) => {
          setWork({ ...work, liveLink: e.target.value });
        }}
        required
      />
      <Input
        placeholder="Github Link"
        value={work.githubLink ?? ''}
        onChange={(e) => {
          setWork({ ...work, githubLink: e.target.value });
        }}
      />
      <Input
        placeholder="Api Link"
        value={work.apiLink ?? ''}
        onChange={(e) => {
          setWork({ ...work, apiLink: e.target.value });
        }}
      />
      <Select
        options={tags}
        labelKey="name"
        valueKey="id"
        placeholder="Tags"
        multi
        searchable={false}
        value={work.value}
        onChange={({ value }) => setWork({ ...work, value })}
        overrides={{
          Tag: {
            props: {
              overrides: {
                Root: { style: { backgroundColor: 'var(--bg-color)' } },
              },
            },
          },
        }}
      />
    </div>
  );
};

const TagBody = ({ tag, setTag }) => {
  useEffect(() => {
    if (!tag.value && tag.color) {
      setTag({ ...tag, value: [{ color: tag.color }] });
    }
  }, [tag]);

  return (
    <div className="admin__modal-container">
      <Input
        placeholder="Name"
        value={tag.name ?? ''}
        onChange={(e) => {
          setTag({ ...tag, name: e.target.value });
        }}
      />
      <Select
        options={[
          { color: 'warning', text: 'Yellow' },
          { color: 'negative', text: 'Red' },
          { color: 'positive', text: 'Green' },
          { color: 'accent', text: 'Blue' },
        ]}
        labelKey="text"
        valueKey="color"
        searchable={false}
        clearable={false}
        onChange={({ value }) => setTag({ ...tag, value })}
        value={tag.value}
      />
    </div>
  );
};

const DeleteBody = ({ value }) => {
  return (
    <p>
      Are you sure you want to delete <b>{value.title ?? value.name}</b>?
    </p>
  );
};

const Modal = () => {
  const {
    modalState,
    setModalState,
    value,
    setValue,
    addWork,
    updateWork,
    deleteWork,
    addTag,
    updateTag,
    deleteTag,
  } = useContext(AdminContext);

  const [isSending, setIsSending] = useState(false);

  const submitHandler = async () => {
    const { action, type } = modalState;

    setIsSending(true);

    let newValue;

    if (value.value) {
      newValue =
        type === 'work'
          ? {
              ...value,
              tags: value.value.map((tag) => tag.id),
            }
          : { ...value, color: value.value[0].color };

      delete newValue.value;
    }

    switch (action) {
      case 'add':
        if (type === 'work') await addWork(newValue ?? value);
        if (type === 'tag') await addTag(newValue ?? value);
        break;
      case 'edit':
        if (type === 'work') await updateWork(newValue ?? value);
        if (type === 'tag') await updateTag(newValue ?? value);
        break;
      case 'delete':
        if (type === 'work') await deleteWork(newValue?.id ?? value.id);
        if (type === 'tag') await deleteTag(newValue?.id ?? value.id);
        break;
      default:
        break;
    }

    setIsSending(false);
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <BaseModal
      onClose={() => setModalState({ ...modalState, isOpen: false })}
      isOpen={modalState.isOpen}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <ModalHeader>{`${modalState.action} ${modalState.type}`}</ModalHeader>
        <ModalBody>
          {modalState.action === 'delete' ? (
            <DeleteBody value={value} />
          ) : modalState.type === 'work' ? (
            <WorkBody work={value} setWork={setValue} />
          ) : (
            <TagBody tag={value} setTag={setValue} />
          )}
        </ModalBody>
        <ModalFooter>
          <ModalButton
            isLoading={isSending}
            colors={
              modalState.action === 'delete'
                ? { backgroundColor: '#e11900' }
                : ''
            }
          >
            {modalState.action}
          </ModalButton>
        </ModalFooter>
      </form>
    </BaseModal>
  );
};

export default Modal;
