import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, ButtonGroup, Card, Icon, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { Link } from 'react-router-dom';

const ActivityDetails = () => {
    const { activityStore } = useStore();

    const { selectedActivity: activity, loadActivity, loadingInitial} = activityStore;

    const { id } = useParams<{id: string}>();

    useEffect(() =>{
        if(id) {
            loadActivity(id);
        }
    },[id, loadActivity])

    if(loadingInitial || !activity) {
        return(
            <LoadingComponent />
        );
    }

    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date.toString()}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths='2'>
                    <Button as={Link} to={`/manage/${activity.id}`} basic color='blue' content='Edit' />
                    <Button as={Link} to='/activities' basic color='grey' content='Cancel' />
                </ButtonGroup>
            </Card.Content>
        </Card>
    );
}

export default observer(ActivityDetails);