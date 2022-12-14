"""New Migration

Revision ID: 65a8b18e8024
Revises: 
Create Date: 2022-09-25 19:50:39.689098

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '65a8b18e8024'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('artists',
    sa.Column('artist_id', sa.Integer(), nullable=False),
    sa.Column('fname', sa.String(), nullable=True),
    sa.Column('lname', sa.String(), nullable=True),
    sa.Column('genre', sa.String(), nullable=True),
    sa.Column('alias', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('artist_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('artists')
    # ### end Alembic commands ###
