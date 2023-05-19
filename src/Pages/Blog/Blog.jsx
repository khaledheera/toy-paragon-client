import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h2>
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p>
          A credential that can be utilized by an application to access an API.
          Access Tokens can be either an opaque string or a JSON Web Token (JWT){" "}
          <br />
          An access token is a credential that represents the authorization
          granted to a client (user or application) to access a specific
          resource. It is usually short-lived and has an expiration time. The
          client includes the access token in each request to the server to
          access protected resources. <br />
          A Refresh token is a string that represents an authorization that was
          granted to a client to use a particular set of web services on behalf
          of a user to access data for a particular institution. <br />
          A refresh token is a long-lived credential that is used to obtain a
          new access token when the current one expires. It is usually issued
          alongside the access token. The client securely stores the refresh
          token and uses it to request a new access token without requiring the
          user to re-authenticate. <br />
          Access tokens are sensitive information and should be stored securely.
          They are typically stored in memory, such as in a variable, during the
          user's session. The client-side application retrieves and includes the
          access token in each request to the server's API.
          <br />
          Refresh tokens are more sensitive than access tokens because they have
          a longer lifespan and can be used to obtain new access tokens. As
          such, they must be stored securely to prevent unauthorized access.
        </p>
      </div>
      <div>
        <h2 className="font-bold">Compare SQL and NoSQL databases?</h2>
        <p>
          SQL databases are commonly referred to as relational database
          management systems (RDBMS). Traditional RDBMS uses SQL syntax as these
          systems utilize row-based database structures that connect related
          data objects between tables. Examples of RDBMS SQL databases include
          Backendless, Microsoft Access, MySQL, Microsoft SQL Server, SQLite,
          Oracle Database, IBM DB2, etc. <br />
          NoSQL databases, on the other hand, are databases without any
          structured tables fixed for holding data. Technically, all
          non-relational databases can be called NoSQL databases. Because a
          NoSQL database is not a relational database, it can be set up very
          quickly and with minimal pre-planning. Examples of NoSQL databases
          include MongoDB, DynamoDB, SimpleDB, CouchDB, CouchBase, Orient DB,
          Infinite Graph, Neo4j, FlockDB, Cassandra, HBase, etc.
        </p>
      </div>
      <div>
        <h2>What is express js? What is Nest JS? </h2>
        <p>
          Express js:Express is one such framework that accomplishes this. It is
          a back end framework for Node JS. Current, it is being referred to as
          the de facto framework for apps built in Node. <br />
          Nest Js:Nest , on the other hand, is highly opinionated. It follow the
          design paradigm of “convention over configuration”. It guides
          developers to code in a certain way and to use tools in a certain way.
          It is expected of developers to write the controllers, service, and
          repos in certain ways.
        </p>
      </div>
      <div>
        <h2>What is MongoDB aggregate and how does it work ?</h2>
        <p>
          Database Management Systems have some common operations that are
          supported by SQL and NoSQL databases as well. The aggregation
          operation is one of them and is backed by several relational and
          non-relational databases. MongoDB is one of those databases that have
          the support of this operation. Aggregation is a key operation in any
          database that allows you to process data records to get targeted
          results. With the help of aggregation, the users can combine several
          entities to form a single meaningful entity by grouping the data.{" "}
          <br />
          The aggregation operations consist of several expressions that help to
          group the data for a meaningful output. For instance, a laptop,
          mobiles, gadgets can be combined under a single entity, let’s say
          technology_store. The entities are combined when individual entities
          do not represent anything or have no meaning.
        </p>
      </div>
    </div>
  );
};

export default Blog;
